import { createClient } from "@/lib/supabase/server";
import EventsManager from "@/components/views/admin/eventsManager";

export default async function AdminEventsPage() {
  const supabase = await createClient();
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false });

  return <EventsManager initialEvents={events ?? []} />;
}
