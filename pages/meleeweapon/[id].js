import {useRouter} from 'next/router';
import axios from "axios";

export  default function meleeweapon(props) {
    const router = useRouter();
    console.log(router.query);
    return (
        <h1>
            dynamic melee weapon page
        </h1>
    )
}