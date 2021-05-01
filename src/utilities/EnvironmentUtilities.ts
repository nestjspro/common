import * as fs from 'fs';

export class EnvironmentUtilities {

    public static getType(): 'local' | 'docker' | 'k8' {

        if (fs.existsSync('/proc/1/cgroup')) {

            const contents = fs.readFileSync('/proc/1/cgroup');

            if (contents.indexOf('docker') > -1) {

                return 'docker';

            } else if (contents.indexOf('kube') > -1) {

                return 'k8';

            }

        }

        return 'local';

    }

}
