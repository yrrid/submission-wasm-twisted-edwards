export interface WasmModule {
    initializeCounters: (a: number) => void;
    resultAddress: () => any;
    pointsAddress: () => any;
    scalarsAddress: () => any;
    // Define other exported functions here
}