// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// 1. INISIALISASI KLIEN SUPABASE
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

// 2. DEFINISI TIPE OPSI QUERY
interface FetchOptions {
  select?: string;
  filter?: { column: string; value: any };
  limit?: number;
  orderBy?: { column: string; ascending?: boolean };
}

// 3. FUNGSI UNIVERSAL FETCH DATA
export async function fetchData<T = any>(
  table: string, 
  options?: FetchOptions
): Promise<{ data: T[] | null; error: any }> {
  
  let query = supabase.from(table).select(options?.select || '*');

  if (options?.filter) {
    query = query.eq(options.filter.column, options.filter.value);
  }

  if (options?.orderBy) {
    query = query.order(options.orderBy.column, { 
      ascending: options.orderBy.ascending ?? true 
    });
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  return { data: data as T[], error };
}