import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./header.module.css";
import { RxDashboard } from "react-icons/rx";

export function Header() {
	const { data: session, status } = useSession();

	return (
		<header className={styles.header}>
			<section className={styles.content}>
				<nav className={styles.nav}>
					<Link href="/" title="Tarefas+ | Organize suas tarefas em equipe">
						<h1 className={styles.logo}>
							Taskify
							<span>+</span>
						</h1>
					</Link>
					{session?.user && (
						<Link href="/dashboard" className={styles.link}>
							Meu Painel
							<RxDashboard size={18} />
						</Link>
					)}
				</nav>

				{status === "loading" ? (
					<></>
				) : session ? (
					<button className={styles.loginButton} onClick={() => signOut()}>
						Olá {session?.user?.name}
					</button>
				) : (
					<button
						className={styles.loginButton}
						onClick={() => signIn("google")}
					>
						Acessar
					</button>
				)}
			</section>
		</header>
	);
}
