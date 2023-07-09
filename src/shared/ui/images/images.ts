import { createLocalImage } from '../../lib'

export const AuthWelcomeLocalImage = createLocalImage({
    source: require('@/shared/assets/images/auth-welcome.webp'),
    alt: 'Auth welcome',
})

export const FemaleLocalImage = createLocalImage({
    source: require('@/shared/assets/images/female.webp'),
    alt: 'Female',
})

export const LogInLocalImage = createLocalImage({
    source: require('@/shared/assets/images/log-in.webp'),
    alt: 'Log in',
})

export const MaleLocalImage = createLocalImage({
    source: require('@/shared/assets/images/male.webp'),
    alt: 'Male',
})