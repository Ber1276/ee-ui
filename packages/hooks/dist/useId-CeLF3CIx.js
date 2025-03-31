import { computed } from "vue";
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
function useId(namespace = "er") {
  const idRef = computed(
    () => `${namespace}-id-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`
  );
  return idRef;
}
export {
  useId as u
};
