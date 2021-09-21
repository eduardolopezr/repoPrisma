import { Context } from "../../utils";

export default {
    createFilm: (parent, args, ctx: Context) => ctx.prisma.createFilm(args.data)
}