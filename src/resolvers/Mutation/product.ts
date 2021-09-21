import { Context } from "../../utils";
export default{
    createProduct: (parent, args, ctx: Context)=> ctx.prisma.createProduct(args.data)
}