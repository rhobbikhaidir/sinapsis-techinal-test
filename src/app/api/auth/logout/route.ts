/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookiesStore = await cookies();
    cookiesStore.delete('token');
    return Response.json({ status: 'success', message: 'berhasil Logout' }, { status: 200 });
  } catch (error: any) {
    if (error && error.response) {
      console.log(error);
      return Response.json(
        {
          errorCode: error.response.data.errorCode,
          message: error.response.data.errorDesc,
        },
        { status: 500 }
      );
    } else {
      return Response.json(
        {
          error: JSON.stringify(error),
          message: "catch error",
        },
        { status: 400 }
      );
    }
  }
}
