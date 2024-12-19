/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { cookies } from "next/headers";

export async function GET(request: any) {
  try {
    const cookiesStore = await cookies();
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("access-token");
    if (!token)
      return Response.json(
        { message: "token cannot be empty" },
        { status: 400 }
      );

    const response = await axios.get(
      `https://gorest.co.in/public/v2/users?access-token=${token}`
    );

    cookiesStore.set("token", token, {});
    return Response.json({ ...response.data }, { status: 200 });
  } catch (error: any) {
    if (error && error.response) {
      return Response.json(
        {
          status: error.response.statusText,
          message: error.response.data.message,
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
