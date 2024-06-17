import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function(){

    const session=await getServerSession(NEXT_AUTH);
    return (
        <div>
            <h1>Server Compoennt</h1>
                {JSON.stringify(session)}
        </div>
    )
}