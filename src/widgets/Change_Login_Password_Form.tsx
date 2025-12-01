import { useState, useEffect } from "react";
import "./Change_Login_Password_Form.css";

//
// Форма смены логина/пароля
// Должна появляться при нажатии кнопок "Сменить" в личном кабинете
//
// Автоматически определяет, что нужно сменить
// (Первый вариант можно реализовать без данной функции)
//

interface ChangeLoginPasswordFormProps {
    isOpen: boolean;
    onClose: () => void;
    fieldType: 'login' | 'password';
    currentLogin?: string;
    onSave?: (formData: FormData) => void;
}

interface FormData {
    currentLogin: string;
    newLogin: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export default function Change_Login_Password_Form({ 
    isOpen, 
    onClose, 
    fieldType,
    currentLogin,
    onSave
}: ChangeLoginPasswordFormProps) {
    const [formData, setFormData] = useState<FormData>({
        currentLogin: '',
        newLogin: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);

    // Сброс формы при открытии/закрытии
    useEffect(() => {
        if (isOpen) {
            setFormData({
                currentLogin: currentLogin || '',
                newLogin: '',
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            setErrors({});
        }
    }, [isOpen, currentLogin]);

    // Закрытие по ESC
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Очищаем ошибку при вводе
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (fieldType === 'login') {
            if (!formData.newLogin.trim()) {
                newErrors.newLogin = 'Введите новый логин';
            } else if (formData.newLogin.length < 3) {
                newErrors.newLogin = 'Логин должен содержать минимум 3 символа';
            }
        } else {
            if (!formData.newPassword) {
                newErrors.newPassword = 'Введите новый пароль';
            } else if (formData.newPassword.length < 6) {
                newErrors.newPassword = 'Пароль должен содержать минимум 6 символов';
            }

            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Подтвердите новый пароль';
            } else if (formData.newPassword !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Пароли не совпадают';
            }
        }

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'Введите текущий пароль для подтверждения';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Имитация запроса к серверу
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Здесь будет реальный вызов API
            console.log('Сохранение данных:', {
                fieldType,
                ...formData
            });

            // Вызываем callback для сохранения данных в родительском компоненте
            if (onSave) {
                onSave(formData);
            }

            // Успешное сохранение - закрываем форму
            onClose();
            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Произошла ошибка при сохранении';
            setErrors({ submit: errorMessage });
        } finally {
            setIsLoading(false);
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const title = fieldType === 'login' ? 'Смена логина' : 'Смена пароля';

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>

                <h2 className="modal-title">{title}</h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    {fieldType === 'login' && (
                        <div className="form-group">
                            <label className="form-label">Новый логин:</label>
                            <input
                                type="text"
                                name="newLogin"
                                value={formData.newLogin}
                                onChange={handleInputChange}
                                className={errors.newLogin ? 'input-error' : ''}
                                disabled={isLoading}
                                placeholder="Введите новый логин"
                            />
                            {errors.newLogin && (
                                <span className="error-message">{errors.newLogin}</span>
                            )}
                        </div>
                    )}

                    {fieldType === 'password' && (
                        <>
                            <div className="form-group">
                                <label className="form-label">Новый пароль:</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    className={errors.newPassword ? 'input-error' : ''}
                                    disabled={isLoading}
                                    placeholder="Введите новый пароль"
                                />
                                {errors.newPassword && (
                                    <span className="error-message">{errors.newPassword}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Подтвердите пароль:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={errors.confirmPassword ? 'input-error' : ''}
                                    disabled={isLoading}
                                    placeholder="Повторите новый пароль"
                                />
                                {errors.confirmPassword && (
                                    <span className="error-message">{errors.confirmPassword}</span>
                                )}
                            </div>
                        </>
                    )}

                    <div className="form-group">
                        <label className="form-label">Текущий пароль:</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange}
                            className={errors.currentPassword ? 'input-error' : ''}
                            disabled={isLoading}
                            placeholder="Введите текущий пароль для подтверждения"
                        />
                        {errors.currentPassword && (
                            <span className="error-message">{errors.currentPassword}</span>
                        )}
                    </div>

                    {errors.submit && (
                        <div className="error-message submit-error">{errors.submit}</div>
                    )}

                    <div className="form-buttons">
                        <button
                            type="button"
                            className="nav_button secondary"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            Отмена
                        </button>
                        <button
                            type="submit"
                            className="nav_button primary"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Сохранение...' : 'Сохранить'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}