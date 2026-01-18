import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_URL } from '../constants';

// Initialize client if URL is valid
// Cast to string to avoid TS narrowing to 'never' if the value matches the excluded string
const supabaseUrl = SUPABASE_URL as string;
const isConfigured = supabaseUrl && supabaseUrl !== "https://your-project-id.supabase.co" && supabaseUrl.includes("https://");

const supabase = isConfigured 
  ? createClient(supabaseUrl, SUPABASE_KEY)
  : null;

export const saveResults = async (session: any, results: any) => {
  if (!supabase) {
    console.warn("Supabase not configured. Check constants.ts");
    return { 
      error: { 
        message: "Supabase URL не настроен. Проверьте constants.ts. URL должен быть вида https://xyz.supabase.co" 
      } 
    };
  }

try {
    // Используем upsert вместо update для надежности
    const { data, error } = await supabase
      .from('iat_results')
      .upsert({ 
        user_id: session.userId,     // Обязательно указываем ID
        results_part2: results,      // Ваши данные
        status: 'completed',
        // Если хотите сохранить referrer, добавьте его тоже:
        referrer: session.referrer 
      }, { onConflict: 'user_id' })  // Если ID совпадает, данные обновятся
      .select(); // ВАЖНО: Добавляем .select(), чтобы получить ответ

    if (error) throw error;
    
    console.log("Успешно сохранено:", data); // Для отладки
    return { data };
  } catch (error) {
    console.error("Error saving results:", error);
    return { error };
  }
};
