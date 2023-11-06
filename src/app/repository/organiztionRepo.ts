import axios from "axios"

export const getOrganizationById = async (orgId: number) => {
	return prisma.organization.findUnique({
		where: {
			id: orgId
		}
	})

}
