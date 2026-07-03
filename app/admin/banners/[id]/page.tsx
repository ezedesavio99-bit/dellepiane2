'use server'

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import BannerEditFormClient from "@/components/admin/banner-edit-form-client"

export default async function EditBannerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/auth/login")
  }

  let banner = null
  if (id !== "new") {
    const { data } = await supabase
      .from("banners")
      .select("*")
      .eq("id", id)
      .single()
    banner = data
  }

  return <BannerEditFormClient id={id} initialBanner={banner} />
}
