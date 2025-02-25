import styles from "./page.module.css";

/** Components */
import { Button } from "@/components/button";
import { Stack } from "@/components/stack/stack";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.center}>
                    <Stack direction='column' style={{
                        marginTop: 80,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h1> SEVEN HUNTER </h1>
                        <Stack direction="row">
                            <Link href='/todo-list'>
                                <Button>
                                    Todo List
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </div>
            </main>
        </div>
    );
}
