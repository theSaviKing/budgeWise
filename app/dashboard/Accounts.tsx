import { Link } from "@nextui-org/link";
import { getAccounts } from "../utils/db-utils";

export default async function Accounts() {
    const accounts = await getAccounts();
    return accounts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4"></div>
    ) : (
        <>
            <p>
                You don't have any accounts yet. Why don't you{" "}
                <Link>add one</Link>?
            </p>
        </>
    );
}
