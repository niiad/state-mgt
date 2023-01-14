export async function login({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			if (username === "nii" && password === "password") {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
}
