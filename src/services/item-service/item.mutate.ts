import database from "src/database/database";

export async function updateSoldByIds(
    items: {
        id: number;
        quantity: number;
    }[]
) {
    try {
        await database.transaction(async (trx) => {
            const query = `
                UPDATE item
                SET sold = sold + ?
                WHERE id = ?
            `;

            const promises = items.map(async (item) => {
                try {
                    await trx.raw(query, [item.quantity, item.id]);
                } catch (error) {
                    console.error(`Error updating item with ID ${item.id}:`, error);
                    throw error; // Propagate the error to roll back the transaction
                }
            });

            await Promise.all(promises);

            await trx.commit();
        });
        return items.map((item) => item.id);
    } catch (error) {
        console.error("Transaction error:", error);
    }
}
