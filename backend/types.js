const zod = require("zod")

const createSchema = zod.object({
	name: zod.string().min(3),
	description: zod.string(),
	interests: zod.array(zod.string()),
})

const deleteSchema = zod.object({
	id: zod.string(),
})

const checkAdminSchema = zod.object({
	email: zod.string(),
	password: zod.string(),
})

const findSchema = zod.object({
	id: zod.string(),
})

module.exports = {
	createSchema,
	deleteSchema,
	findSchema,
	checkAdminSchema,
}
