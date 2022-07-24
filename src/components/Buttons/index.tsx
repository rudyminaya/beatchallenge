import './styles.scss'

type BarButtonNavProps = {
    onClick: () => void
}

type CloseButtonNavProps = BarButtonNavProps

export const BarButtonNav = ({ onClick }: BarButtonNavProps) => {
    return (
        <div className="barButtonNav" onClick={onClick}>
            <div className="barButtonNav__line"></div>
            <div className="barButtonNav__line"></div>
            <div className="barButtonNav__line"></div>
        </div>
    )
}
export const CloseButtonNav = ({ onClick }: CloseButtonNavProps) => {
    return (
        <div className="closeButtonNav">
            <div className="closeButtonNav__line"></div>
            <div className="closeButtonNav__line"></div>
        </div>
    )
}
