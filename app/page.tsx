import NavigationBar from "@/components/navigationBar";
import { redirect } from "next/navigation";

export default function root() {
  redirect('/home');
  
}
