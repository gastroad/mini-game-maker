import { useRecoilState, useResetRecoilState, RecoilState } from 'recoil';

type UseRecoilStateWithResetReturnType<T> = {
    get: T;
    set: (newValue: T | ((prevValue: T) => T)) => void;
    reset: () => void;
};

const useRecoilStateWithReset = <T>(state: RecoilState<T>): UseRecoilStateWithResetReturnType<T> => {
    const [get, set] = useRecoilState(state);
    const reset = useResetRecoilState(state);
    return { get, set, reset };
};

export default useRecoilStateWithReset