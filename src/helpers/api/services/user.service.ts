import { User } from "../models/user.model";
import { Resource } from "../types/resource.type";
import { createService } from "./base.service";

export const UserResource: Resource = {
  path: "users",
};

const { getResource } = createService<Resource>(UserResource);

export const getUser = async (userId: string, options?: {}) => {
  try {
    if(!userId) return undefined
    
    const data: User = await getResource(
      userId,
      options || {
        next: {
          revalidate: 60,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
