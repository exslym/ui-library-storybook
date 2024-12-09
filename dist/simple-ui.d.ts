import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ComponentPropsWithRef } from 'react';
import { default as default_2 } from 'react';
import { DetailedHTMLProps } from 'react';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';

declare type AsProp<C extends default_2.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C;
};

export declare const Box: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type BoxProps = ComponentPropsWithRef<'div'>;

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorScheme?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
declare type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
declare type InheritableElementProps<C extends default_2.ElementType, Props = {}> = ExtendableProps<PropsOf<C>, Props>;

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

declare const inputStyles: (props?: ClassProp | undefined) => string;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
declare type PolymorphicComponentProps<C extends default_2.ElementType, Props = {}> = InheritableElementProps<C, Props & AsProp<C>>;

declare type PolymorphicComponentPropsWithRef<C extends default_2.ElementType, Props = {}> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};

declare type PolymorphicRef<C extends default_2.ElementType> = default_2.ComponentPropsWithRef<C>['ref' | ''];

declare type PropsOf<C extends keyof JSX.IntrinsicElements | default_2.JSXElementConstructor<unknown>> = JSX.LibraryManagedAttributes<C, default_2.ComponentPropsWithoutRef<C>>;

export declare const Stack: ({ className, ...props }: StackProps) => JSX_2.Element;

declare type StackProps = BoxProps;

declare const Text_2: TextComponent;
export { Text_2 as Text }

declare type TextComponent = <C extends default_2.ElementType = 'span'>(props: TextProps<C>) => default_2.ReactElement | null;

declare type TextProps<C extends default_2.ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;

declare const textStyles: (props?: ({
    emphasis?: "low" | null | undefined;
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export { }
