export interface IApplicationContext {
    startServer() : void;
    initializeRoutes() : void;
    initializeDependencies() : void;
    initializeModels() : void;
    getKernel() : IKernel;
}