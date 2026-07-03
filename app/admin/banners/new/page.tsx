import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import BannerEditFormClient from "@/components/admin/banner-edit-form-client"

export default async function NewBannerPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/auth/login")
  }

  return <BannerEditFormClient id="new" initialBanner={null} />
}
