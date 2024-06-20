// Import useNavigation from next/navigation instead of next/router
import { useNavigation } from "next/navigation";

const New = () => {
  // Use useNavigation hook instead of useRouter
  const navigation = useNavigation();
  const { id } = navigation.query;

  return (
    <div>
      <h1>Post: {id}</h1>
    </div>
  );
};

export default New;
