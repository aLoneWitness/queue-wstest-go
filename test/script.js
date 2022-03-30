import ws from 'k6/ws';
import { check} from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 5000 },
        { duration: '50s', target: 5000 },
    ],
};

export function setup() {

    return {}
}

export default function (data) {
    const url = 'ws://34.90.8.43:8080/queue';

        const res = ws.connect(url, null, function (socket) {


            socket.on('error', function error() {
                console.log('Error thrown')
            })
            socket.on('open', function open() {
                socket.close();
	        });
        })
        check(res, { 'status is 101': (r) => r && r.status === 101 });
    // }
}

export function teardown(data) {

}