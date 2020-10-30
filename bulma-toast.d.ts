declare module "bulma-toast";

type BulmaTypes = [
	"is-primary",
	"is-link",
	"is-info",
	"is-success",
	"is-warning",
	"is-danger"
];

type Animations = [
	"balance",
	"flash",
	"rubberBand",
	"shakeX",
	"shakeY",
	"headShake",
	"swing",
	"tada",
	"wobble",
	"jello",
	"heartBeat",
	"backInDown",
	"backInLeft",
	"backInRight",
	"backInUp",
	"backOutDown",
	"backOutLeft",
	"backOutRight",
	"backOutUp",
	"bounceIn",
	"bounceInDown",
	"bounceInLeft",
	"bounceInRight",
	"bounceInUp",
	"fadeIn",
	"fadeInDown",
	"fadeInDownBig",
	"fadeInLeft",
	"fadeInLeftBig"
];

type Positions = [
	"top-left",
	"top-center",
	"top-right",
	"center",
	"bottom-left",
	"bottom-center",
	"bottom-right"
];

interface Animate {
	in: string;
	out: string;
}

interface Options {
	message: string;
	type?: BulmaTypes | string,
	duration?: number,
	position?: Positions,
	dismissible?: boolean,
	pauseOnHover?: boolean,
	closeOnClick?: boolean,
	opacity?: number,
	animate?: Animate
}

export function toast (options: Options): void;
export function setDoc (window: Document): void;