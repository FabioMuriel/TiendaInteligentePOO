using TiendaInteligenteBackend.Domain.Entities;

namespace TiendaInteligenteBackend.Domain.Interfaces;

public interface IUserRepository
{
    Task<UserEntity> CreateUser(UserEntity user);
    Task<UserEntity> UpdateUser(UserEntity user);
    Task<UserEntity> DeleteUser(int userId);
    Task<UserEntity> GetUserById(int userId);
}