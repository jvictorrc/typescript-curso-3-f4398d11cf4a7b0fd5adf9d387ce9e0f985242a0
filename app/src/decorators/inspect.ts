export function inspect (
    target: any,
    propertKey: string,
    descripctor: PropertyDescriptor
) {
    const metodoOriginal = descripctor.value;
    descripctor.value = function(...args: any[]) {
        console.log(`---Método ${propertKey}`)
        console.log(`------parametros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args)

    }
   return descripctor
}

