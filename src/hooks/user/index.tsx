import { setInformation, setLoading, setSession } from "../../redux/reducers/user/user.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/redux.hooks"
import { SignInUser } from "../../services/users/signInUser";

export function useUser() {

    const { error, loading, signIn, information, session } = useAppSelector((state) => state.UserReducer)
    const dispatch = useAppDispatch()

    const setSignIn = async (email: string, password: string) => {
        dispatch(setLoading(true))
        const { session, user } = await SignInUser(email, password)
        dispatch(
            setSession({
                access_token: session.access_token,
                expires_in: session.expires_in,
                expires_at: session.expires_at,
                refresh_token: session.refresh_token,
                token_type: session.token_type
            })
        )
        dispatch(
            setInformation({
                phone: user.phone!,
                email: user.email!,
                id: user.id,
                metadata: {
                    nickname: user.user_metadata.nickname,
                    name: user.user_metadata.name,
                }
            })
        )
        dispatch(setLoading(false))
    }

    return { error, loading, signIn, information, session, setSignIn }

}