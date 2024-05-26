import { getPaymentCards } from "../utils/db-utils";
import { Link } from "@nextui-org/link";

export default async function PaymentCards() {
    const cards = await getPaymentCards();
    return cards.length > 0 ? (
        <div className="grid grid-cols-3 gap-4"></div>
    ) : (
        <>
            <p>
                You don't have any cards yet. Why don't you <Link>add one</Link>
                ?
            </p>
        </>
    );
}
