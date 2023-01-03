import { getTasks } from "$lib/utils/getTasks";

export async function load() {
    return await getTasks('4a84ebb649d7adfd728cb7ba3325ddd61254a471');
}