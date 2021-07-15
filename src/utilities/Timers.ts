import * as chalk from 'chalk';

export function Timer(message: string, logStartEnd: boolean = false) {

    if (process.env.DEBUG) {

        return function (target: any, name: string, descriptor: PropertyDescriptor) {

            const method = descriptor.value;

            descriptor.value = async function () {

                const start = process.hrtime.bigint();

                if (logStartEnd) {

                    console.log(`${ chalk.gray(new Date().toISOString()) } ${ chalk.magenta(message) } started at: ${ chalk.blueBright(new Date().toISOString()) }`);

                }

                //
                // Execute method that called this..
                //
                await method.apply(this);

                console.log(`${ chalk.gray(new Date().toISOString()) } ${ chalk.magenta(message) } completed in: ${ chalk.yellowBright(Number(process.hrtime.bigint() - start) / 1000000) } (milliseconds)`);

                if (logStartEnd) {

                    console.log(`${ chalk.gray(new Date().toISOString()) } ${ chalk.magenta(message) } completed at: ${ chalk.greenBright(new Date().toISOString()) }`);

                }

            };

        };

    }

}