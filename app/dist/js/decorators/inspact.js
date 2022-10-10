export function inspect(target, propertKey, descripctor) {
    const metodoOriginal = descripctor.value;
    descripctor.value = function (...args) {
        console.log(`---Método ${propertKey}`);
        console.log(`------parametros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
    };
    return descripctor;
}
