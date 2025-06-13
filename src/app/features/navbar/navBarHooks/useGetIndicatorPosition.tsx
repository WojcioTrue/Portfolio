
const useGetIndicatorPosition = (section: HTMLDivElement | HTMLLIElement | null | undefined) => {

    const horizontalMidPosition = () => {
        const indicatorPosition = section?.getBoundingClientRect()
            return Number((indicatorPosition!.left).toFixed(0))
        
    }
    return {
        horizontalMid: horizontalMidPosition(),
        verticalMid: 25,
    }
}

export default useGetIndicatorPosition