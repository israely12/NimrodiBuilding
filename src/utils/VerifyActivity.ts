import roles from "../data/roles.json";
import { Role } from "../store/rolereducer";
interface IuseActivityParams {
  activity: string;
  role: Role;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const activityIndex = activities.indexOf(activity);
  
  const roleIndex = roles.indexOf(role.role);
  console.log(role);
  
 

  if (activityIndex === -1) {
    return false;
  }  
  const isRoleValid = roles.includes(role.role);
  
  if (!isRoleValid) {
    return false;
  }

  return roleIndex >= activityIndex;
};

export default useIsVerified;
