using TiendaInteligenteBackend.Domain.Entities;

namespace TiendaInteligenteBackend.Domain.Interfaces;

public interface IUserUsesCases
{
    Task<UserEntity> CreateUserAsync(UserEntity user);
    Task<UserEntity> UpdateUserAsync(UserEntity user);
    Task<UserEntity> DeleteUserAsync(UserEntity user);
    Task<UserEntity> GetUserByIdAsync(Guid userId);
}