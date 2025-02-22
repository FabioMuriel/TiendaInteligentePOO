using TiendaInteligenteBackend.Domain.Entities;
using TiendaInteligenteBackend.Domain.Interfaces;

namespace TiendaInteligenteBackend.Infrastructure.Repository;

public class UserRepository : IUserRepository
{
    
    public Task<UserEntity> CreateUser(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> UpdateUser(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> DeleteUser(int userId)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> GetUserById(int userId)
    {
        throw new NotImplementedException();
    }
}