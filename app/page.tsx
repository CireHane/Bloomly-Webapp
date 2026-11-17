import NavigationBar from "@/components/NavigationBar";
import { redirect } from "next/navigation";

export default function root() {
  redirect('/home');
  
}
