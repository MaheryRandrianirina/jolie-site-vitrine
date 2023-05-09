
export default function createObserver(callback: IntersectionObserverCallback, 
    targets:( Element | null)[], 
    options?: IntersectionObserverInit
): void {
    const observer = new IntersectionObserver(callback, options)

    if(targets.length > 0){
        targets.forEach(target => {
            if(target !== null){
                observer.observe(target) 
            }else {
                throw new Error(`La variable target est null`)
            }
        })
       
    }
}