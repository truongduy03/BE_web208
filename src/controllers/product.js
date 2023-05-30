import Product from '../models/product'
export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length == 0) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json({
            message: " tìm sản phẩm thành công",
            datas: products
        })
    } catch (error) {
        res.status(500).json({
            message:"Lỗi server"
        })
    }
}

