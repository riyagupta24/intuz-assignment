export const products = async (req, res) => {
    try {
        const result = [
            {
                "id": 1,
                "name": "Product 1",
                "brand_name": "Test",
                "category": "Soap",
                "rate": 10,
                "quantity": 10
            },
            {
                "id": 2,
                "name": "Product 2",
                "brand_name": "Test",
                "category": "Soap",
                "rate": 12,
                "quantity": 21
            },
        ]
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Caught Some error, Please try again...!" })
    }
}