export default function useLocation() {
  const navigateToLocation = (dest = "") => {
    location.href = "#" + dest;
  };
  return [navigateToLocation];
}
