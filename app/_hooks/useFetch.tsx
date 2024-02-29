import useAsync from "./useAsync";

type useFetchProps = {
  url: string;
  dependencies: [];
};

export default function useFetch({ url, dependencies = [] }: useFetchProps) {
  return useAsync({
    callback: () => {
      return fetch(url).then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      });
    },
    dependencies,
  });
}
