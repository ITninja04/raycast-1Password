import { openOpApp } from "./v8/utils";
import { showToast, Toast } from "@raycast/api";

export default async function openOpDesktopApp() {
    const toast = await showToast({
        title: "Success",
        message: "Successfully opened 1Password Desktop App"
    })
  try {
    await openOpApp();
    toast.style = Toast.Style.Success;
    
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      toast.style = Toast.Style.Failure;
    }
  }
}
