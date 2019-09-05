class User < ApplicationRecord

    validates :username, :email, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :username, :email, uniqueness: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :songs
    has_many :comments
    has_many :playlists
    
    has_one_attached :image

    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
