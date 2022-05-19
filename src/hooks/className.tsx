const useJoinClassNames = (...names: (string | undefined | null)[]): string => {
    return names.filter(n => !!n).join(' ');
}

export default useJoinClassNames;